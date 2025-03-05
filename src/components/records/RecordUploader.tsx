
import { useState, useRef } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UploadCloud, Loader2, X, FileText, File, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { motion } from "framer-motion";

const formSchema = z.object({
  title: z.string().min(2, { message: "Title must be at least 2 characters" }),
  childId: z.string({ required_error: "Please select a child" }),
  category: z.string({ required_error: "Please select a category" }),
  date: z.string({ required_error: "Please select a date" }),
  notes: z.string().optional(),
  file: z.any()
    .refine((file) => file?.length > 0, "File is required")
    .refine(
      (file) => {
        if (!file || file.length === 0) return false;
        const fileType = file[0].type;
        return fileType === "application/pdf" || fileType.startsWith("image/");
      },
      "File must be a PDF or an image (JPEG, PNG)"
    )
    .refine(
      (file) => {
        if (!file || file.length === 0) return false;
        return file[0].size <= 10 * 1024 * 1024; // 10MB
      },
      "File size must be less than 10MB"
    ),
});

type FormValues = z.infer<typeof formSchema>;

interface ChildOption {
  id: string;
  name: string;
}

interface RecordUploaderProps {
  children: ChildOption[];
  onSuccess?: () => void;
  userType: "parent" | "hospital";
}

export function RecordUploader({ children, onSuccess, userType }: RecordUploaderProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [previewType, setPreviewType] = useState<"pdf" | "image" | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      childId: "",
      category: "",
      date: new Date().toISOString().split("T")[0],
      notes: "",
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    form.setValue("file", e.target.files, { shouldValidate: true });

    // Create preview
    if (file.type === "application/pdf") {
      setPreviewType("pdf");
      setPreview(null); // No preview for PDFs, just show icon
    } else if (file.type.startsWith("image/")) {
      setPreviewType("image");
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearFile = () => {
    setPreview(null);
    setPreviewType(null);
    form.setValue("file", undefined);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const onSubmit = async (data: FormValues) => {
    setIsUploading(true);
    
    try {
      // In a real app, we would upload to a backend service here
      console.log("Uploading record:", data);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success("Record uploaded successfully");
      
      // Reset form
      form.reset();
      clearFile();
      
      // Callback
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      toast.error("Failed to upload record. Please try again.");
      console.error("Upload error:", error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Record Title</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Annual Checkup Report" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="childId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Child</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a child" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {children.map((child) => (
                      <SelectItem key={child.id} value={child.id}>
                        {child.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="vaccination">Vaccination</SelectItem>
                    <SelectItem value="doctor-visit">Doctor Visit</SelectItem>
                    <SelectItem value="lab-test">Lab Test</SelectItem>
                    <SelectItem value="prescription">Prescription</SelectItem>
                    <SelectItem value="school-report">School Report</SelectItem>
                    <SelectItem value="activity">Activity/Achievement</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Notes</FormLabel>
              <FormControl>
                <Textarea placeholder="Add any important details about this record..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="file"
          render={({ field: { onChange, ...rest } }) => (
            <FormItem>
              <FormLabel>Upload File (PDF or Image)</FormLabel>
              <FormControl>
                <div className="space-y-4">
                  {!preview && !previewType ? (
                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-primary transition-colors"
                    >
                      <UploadCloud size={32} className="text-muted-foreground" />
                      <p className="text-muted-foreground">
                        Drag and drop or click to upload
                      </p>
                      <p className="text-xs text-muted-foreground">
                        PDF, JPEG, PNG (max 10MB)
                      </p>
                    </div>
                  ) : (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="border rounded-lg p-4 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        {previewType === "pdf" ? (
                          <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center">
                            <FileText size={24} />
                          </div>
                        ) : previewType === "image" && preview ? (
                          <div className="w-12 h-12 bg-blue-100 rounded-lg overflow-hidden">
                            <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                          </div>
                        ) : (
                          <div className="w-12 h-12 bg-gray-100 text-gray-600 rounded-lg flex items-center justify-center">
                            <File size={24} />
                          </div>
                        )}
                        
                        <div>
                          <p className="font-medium text-sm truncate max-w-[200px]">
                            {fileInputRef.current?.files?.[0]?.name || "File"}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {fileInputRef.current?.files?.[0]?.size
                              ? (fileInputRef.current.files[0].size / 1024 / 1024).toFixed(2) + " MB"
                              : ""}
                          </p>
                        </div>
                      </div>
                      
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={clearFile}
                      >
                        <X size={18} className="text-muted-foreground" />
                      </Button>
                    </motion.div>
                  )}
                  
                  <input
                    type="file"
                    accept=".pdf,image/jpeg,image/png"
                    className="hidden"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    {...rest}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit" className="w-full" disabled={isUploading}>
          {isUploading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Uploading...
            </>
          ) : (
            <>
              <UploadCloud size={16} className="mr-2" />
              Upload Record
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}

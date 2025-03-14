import { PageTransition } from "@/components/layout/PageTransition";
import { AppLayout } from "@/components/layout/AppLayout";
import { ChildProfileCard } from "@/components/dashboard/ChildProfileCard";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { Button } from "@/components/ui/button";
import { Plus, Calendar, FileText, AlertTriangle, Activity } from "lucide-react";
import { Link } from "react-router-dom";

const children = [
  {
    id: "1",
    name: "Emily Johnson",
    age: 8,
    bloodType: "O+",
    nextCheckup: "Oct 15, 2023",
    allergies: "Peanuts, Dairy"
  },
  {
    id: "2",
    name: "Michael Johnson",
    age: 6,
    bloodType: "A+",
    nextCheckup: "Nov 20, 2023",
    allergies: "Dust, Pollen"
  }
];

const ParentDashboard = () => {
  return (
    <PageTransition>
      <AppLayout userType="parent">
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">
                Monitor your children's health, education, and activities
              </p>
            </div>
            <Button asChild>
              <Link to="/add-child">
                <Plus size={16} className="mr-2" />
                Add Child
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatsCard 
              title="Upcoming Vaccinations" 
              value="2"
              description="Next: Flu Shot (Oct 15)"
              icon={<FileText size={18} />}
              color="blue"
              delay={0}
            />
            <StatsCard 
              title="School Events" 
              value="3"
              description="Next: Parent-Teacher Meeting"
              icon={<Calendar size={18} />}
              color="green"
              delay={1}
            />
            <StatsCard 
              title="Medical Alerts" 
              value="1"
              description="Annual check-up due"
              icon={<AlertTriangle size={18} />}
              color="amber"
              delay={2}
            />
            <StatsCard 
              title="Activity Updates" 
              value="5"
              description="Swimming lesson tomorrow"
              icon={<Activity size={18} />}
              color="rose"
              delay={3}
            />
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold tracking-tight">Child Profiles</h2>
              <Link to="/children" className="text-sm text-primary hover:underline">
                View all
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {children.map((child, index) => (
                <ChildProfileCard
                  key={child.id}
                  id={child.id}
                  name={child.name}
                  age={child.age}
                  bloodType={child.bloodType}
                  nextCheckup={child.nextCheckup}
                  allergies={child.allergies}
                  delay={index}
                />
              ))}
              <div className="w-full h-full min-h-[200px] flex items-center justify-center">
                <Button variant="outline" asChild className="h-auto aspect-square p-8 rounded-lg border-dashed">
                  <Link to="/add-child" className="flex flex-col items-center gap-2">
                    <Plus size={24} />
                    <span>Add Child</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold tracking-tight">Recent Records</h2>
              <Link to="/medical-records" className="text-sm text-primary hover:underline">
                View all
              </Link>
            </div>
            
            <div className="bg-card rounded-lg border p-4">
              <div className="space-y-4">
                <div className="flex items-start justify-between pb-4 border-b">
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700">
                        <FileText size={18} />
                      </div>
                      <div>
                        <p className="font-medium">Annual Check-up Report</p>
                        <p className="text-sm text-muted-foreground">Emily Johnson • Oct 5, 2023</p>
                      </div>
                    </div>
                  </div>
                  <Link to="/medical-records/123" className="text-sm text-primary">
                    View
                  </Link>
                </div>
                
                <div className="flex items-start justify-between pb-4 border-b">
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-700">
                        <FileText size={18} />
                      </div>
                      <div>
                        <p className="font-medium">School Report Card</p>
                        <p className="text-sm text-muted-foreground">Michael Johnson • Sep 30, 2023</p>
                      </div>
                    </div>
                  </div>
                  <Link to="/school-records/456" className="text-sm text-primary">
                    View
                  </Link>
                </div>
                
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
                        <FileText size={18} />
                      </div>
                      <div>
                        <p className="font-medium">Vaccination Record</p>
                        <p className="text-sm text-muted-foreground">Emily Johnson • Sep 15, 2023</p>
                      </div>
                    </div>
                  </div>
                  <Link to="/medical-records/789" className="text-sm text-primary">
                    View
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AppLayout>
    </PageTransition>
  );
};

export default ParentDashboard;

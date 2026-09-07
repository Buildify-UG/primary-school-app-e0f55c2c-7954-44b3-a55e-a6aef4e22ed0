import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  BookOpen,
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle,
  GraduationCap,
  Award,
  MessageSquare,
  Settings,
} from "lucide-react";

// Sample data
const students = [
  { id: 1, name: "Emma Johnson", grade: "Grade 3", avatar: "EJ", status: "Present" },
  { id: 2, name: "Liam Smith", grade: "Grade 3", avatar: "LS", status: "Present" },
  { id: 3, name: "Olivia Brown", grade: "Grade 4", avatar: "OB", status: "Absent" },
  { id: 4, name: "Noah Davis", grade: "Grade 3", avatar: "ND", status: "Present" },
  { id: 5, name: "Ava Wilson", grade: "Grade 4", avatar: "AW", status: "Late" },
];

const assignments = [
  {
    id: 1,
    title: "Math: Fractions",
    grade: "Grade 3",
    dueDate: "2026-09-10",
    submitted: 18,
    total: 22,
    status: "In Progress",
  },
  {
    id: 2,
    title: "English: Essay Writing",
    grade: "Grade 4",
    dueDate: "2026-09-08",
    submitted: 15,
    total: 20,
    status: "Due Soon",
  },
  {
    id: 3,
    title: "Science: Solar System",
    grade: "Grade 3",
    dueDate: "2026-09-15",
    submitted: 8,
    total: 22,
    status: "Just Assigned",
  },
];

const classes = [
  {
    id: 1,
    name: "Grade 3A",
    teacher: "Mrs. Sarah",
    students: 22,
    nextClass: "Math - 10:00 AM",
    room: "Room 301",
  },
  {
    id: 2,
    name: "Grade 4B",
    teacher: "Mr. James",
    students: 20,
    nextClass: "English - 11:00 AM",
    room: "Room 402",
  },
  {
    id: 3,
    name: "Grade 3C",
    teacher: "Ms. Emily",
    students: 21,
    nextClass: "Science - 1:30 PM",
    room: "Room 305",
  },
];

const announcements = [
  {
    id: 1,
    title: "School Assembly",
    message: "All students gather in the auditorium at 2:00 PM",
    date: "Today",
    priority: "high",
  },
  {
    id: 2,
    title: "Sports Day Registration",
    message: "Register your child for upcoming sports day events",
    date: "Sep 5",
    priority: "medium",
  },
  {
    id: 3,
    title: "Library Books Due",
    message: "Please return borrowed books by Friday",
    date: "Sep 6",
    priority: "low",
  },
];

export default function Index() {
  const [activeTab, setActiveTab] = useState("overview");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Present":
        return "bg-green-100 text-green-800";
      case "Absent":
        return "bg-red-100 text-red-800";
      case "Late":
        return "bg-yellow-100 text-yellow-800";
      case "In Progress":
        return "bg-blue-100 text-blue-800";
      case "Due Soon":
        return "bg-orange-100 text-orange-800";
      case "Just Assigned":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "border-l-4 border-l-red-500";
      case "medium":
        return "border-l-4 border-l-yellow-500";
      case "low":
        return "border-l-4 border-l-green-500";
      default:
        return "border-l-4 border-l-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Primary School Hub</h1>
                <p className="text-sm text-gray-600">Manage classes, students & assignments</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <MessageSquare className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Students</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">105</p>
                </div>
                <Users className="w-10 h-10 text-blue-500 opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Classes</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">5</p>
                </div>
                <BookOpen className="w-10 h-10 text-purple-500 opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Assignments</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">8</p>
                </div>
                <Award className="w-10 h-10 text-green-500 opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Attendance Today</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">98%</p>
                </div>
                <CheckCircle2 className="w-10 h-10 text-orange-500 opacity-20" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="bg-white p-1 border border-gray-200">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="assignments">Assignments</TabsTrigger>
            <TabsTrigger value="classes">Classes</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Announcements */}
              <Card className="lg:col-span-2 bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-blue-500" />
                    Announcements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {announcements.map((ann) => (
                    <div
                      key={ann.id}
                      className={`p-4 rounded-lg bg-gray-50 ${getPriorityColor(ann.priority)}`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{ann.title}</h4>
                          <p className="text-sm text-gray-600 mt-1">{ann.message}</p>
                        </div>
                        <span className="text-xs text-gray-500 ml-2">{ann.date}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button className="w-full justify-start" variant="outline">
                    Mark Attendance
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    Create Assignment
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    Send Message
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    Schedule Event
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    View Reports
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Recent Classes */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-purple-500" />
                  Today's Classes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {classes.map((cls) => (
                    <div
                      key={cls.id}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div>
                        <h4 className="font-semibold text-gray-900">{cls.name}</h4>
                        <p className="text-sm text-gray-600">{cls.nextClass}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">{cls.room}</p>
                        <p className="text-xs text-gray-500">{cls.students} students</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Students Tab */}
          <TabsContent value="students">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-500" />
                  Student Attendance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {students.map((student) => (
                    <div
                      key={student.id}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 text-white flex items-center justify-center font-semibold text-sm">
                          {student.avatar}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{student.name}</p>
                          <p className="text-sm text-gray-600">{student.grade}</p>
                        </div>
                      </div>
                      <Badge className={getStatusColor(student.status)}>
                        {student.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Assignments Tab */}
          <TabsContent value="assignments">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-green-500" />
                  Active Assignments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {assignments.map((assignment) => (
                    <div
                      key={assignment.id}
                      className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-gray-900">{assignment.title}</h4>
                          <p className="text-sm text-gray-600">{assignment.grade}</p>
                        </div>
                        <Badge className={getStatusColor(assignment.status)}>
                          {assignment.status}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-4">
                          <span className="text-gray-600">
                            <Clock className="w-4 h-4 inline mr-1" />
                            Due: {assignment.dueDate}
                          </span>
                        </div>
                        <div className="text-gray-600">
                          {assignment.submitted}/{assignment.total} submitted
                        </div>
                      </div>
                      <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                          style={{
                            width: `${(assignment.submitted / assignment.total) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Classes Tab */}
          <TabsContent value="classes">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {classes.map((cls) => (
                <Card key={cls.id} className="bg-white hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{cls.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-600">Teacher</p>
                      <p className="font-medium text-gray-900">{cls.teacher}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Students</p>
                      <p className="font-medium text-gray-900">{cls.students}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Location</p>
                      <p className="font-medium text-gray-900">{cls.room}</p>
                    </div>
                    <div className="pt-2 border-t border-gray-200">
                      <p className="text-sm text-gray-600">Next Class</p>
                      <p className="font-medium text-purple-600">{cls.nextClass}</p>
                    </div>
                    <Button className="w-full mt-4" variant="outline">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import AboutTheCourse from '../util/aboutTheCourse'
import ByTheNumber from '../util/byTheNumber'
import Certificate from '../util/certificate'
import { Description } from '@radix-ui/react-dialog'
import CourseDescription from '../util/courseDescription'
import Instructor from './instructor'
import CourseInstructor from '../util/Courseinstructor'
import CourseNotes from '../util/courseNotes'

const TabComponent = () => {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="grid w-full grid-cols-6">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="qanda">Q&A</TabsTrigger>
        <TabsTrigger value="notes">Notes</TabsTrigger>
        <TabsTrigger value="announcements">Announcements</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
        <TabsTrigger value="learning">Learning tools</TabsTrigger>

      </TabsList>
      <TabsContent value="overview">
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {/* contenet of overview */}
            <AboutTheCourse />
            <ByTheNumber />
            <Certificate />
            <CourseDescription />
            <hr className='my-8'/>
            <CourseInstructor />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="qanda">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="notes">
        <Card>
          <CardHeader>
            <CardTitle>Notes</CardTitle>
            <CardDescription className='text-xl'>
            Save your notes today, access them tomorrow
            </CardDescription>
          </CardHeader>
            <CourseNotes />
        </Card>
      </TabsContent>
    </Tabs>
  )
}

export default TabComponent
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

const Blog = () => {
  return (
    <Card>
      <CardHeader>
        <h2 className="font-semibold">Blog</h2>
      </CardHeader>

      <CardContent>
        <div className="flex items-center justify-between">
          <div className="w-full text-center">test1</div>
          <Separator
            orientation="vertical"
            className="h-8 mx-3 bg-muted-foreground/30"
          />
          <div className="w-full text-center">test2</div>
        </div>
      </CardContent>
    </Card>
  )
}

export default Blog

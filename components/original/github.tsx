import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { SiGithub } from '@icons-pack/react-simple-icons'

const Github = () => {
  return (
    <Card>
      <CardHeader>
        <h2 className="font-semibold">Github</h2>
      </CardHeader>

      <CardContent>
        <div>
          <SiGithub size={24} />
        </div>
      </CardContent>
    </Card>
  )
}

export default Github

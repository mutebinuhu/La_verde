import {Card, CardHeader, CardBody, Image,CardFooter, Textarea, Button} from "@nextui-org/react";


const Post = ({title})=>{
    return(
      <Card shadow="sm" className="my-2" >
            <CardBody className="overflow-visible rounded p-0 ">
                <CardBody className="p-2">
                  <p>{title}</p>
                
                </CardBody>
                <CardFooter className="flex items-center justify-between">
                  <Button size="lg" radius="sm" color="primary">View Details</Button>
                 
                </CardFooter>
            </CardBody>
      </Card>
    )
  }
  export default Post;
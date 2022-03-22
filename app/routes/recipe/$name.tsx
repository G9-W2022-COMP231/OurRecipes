// preparation for loading data into the page
//import type { LoaderFunction } from "remix";

import { Badge, ListGroup, Stack } from "react-bootstrap";
import { Image } from "remix-image";

/*
// preparation for loading data into the page for the person creating the response
export const loader: LoaderFunction = ({ params }) => {
  return (

  )
}
*/
export default function name() {
  return (
    <Stack gap={2} direction="vertical" className="col-md-5 mx-auto">
      {/* Here is the title for the page */}
      <head>
        <title>Recipe Details</title>
      </head>
      {/*Recipe Title*/}
      <div className="d-flex justify-content-center">
        <h1>Recipe Title</h1>
      </div>
      <Stack gap={2} direction="horizontal" className="col-md-5 mx-auto">
        <div>
          <ListGroup as="ul">
            {/*Recipe Cooking Time ListGroup  Item*/}
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Cooking Time</div>
              </div>
              <Badge bg="primary" pill>
                x minutes/hours
              </Badge>
            </ListGroup.Item>

            {/*Recipe Cooking Tools ListGroup Item*/}
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Cooking Tools</div>
              </div>
              <ListGroup>
                {/*Cooking Tools*/}
                {/*For the person creating the response,
                  make it so that it will create the multiple listgroup.items
                  so that it is more adaptive and does not
                  require the amount of items to be hardcoded
                  */}
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Tool</div>
                    Description
                  </div>
                  <Badge bg="primary" pill>
                    Amount
                  </Badge>
                </ListGroup.Item>
              </ListGroup>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </Stack>
      {/*this <Image /> tag is from remix-image
      it's easier to use to add in responsive images
      Here's a website that shows its usage
      https://bestofreactjs.com/repo/Josh-McFarlin-remix-image
      I recommend to find other sources if you don't understand this part*/}
      <Image />
      <Stack gap={2} direction="horizontal" className="col-md-5 mx-auto">
        <div>
          <h2>Ingredients</h2>
          <ListGroup variant="flush">
            {/*For the person creating the response,
            make it so that it will create the multiple listgroup.items
            so that it is more adaptive and does not
            require the amount of items to be hardcoded
            */}
            <ListGroup.Item> x amount of ingredient</ListGroup.Item>
          </ListGroup>
        </div>

        <div>
          <h2>Instructions</h2>
          <ListGroup variant="flush">
            {/*For the person creating the response,
            make it so that it will create the multiple listgroup.items
            so that it is more adaptive and does not
            require the amount of items to be hardcoded
            */}
            <ListGroup.Item>instruction here</ListGroup.Item>
          </ListGroup>
        </div>
      </Stack>
    </Stack>
  );
}

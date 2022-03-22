// preparation for loading data into the page
//import type { LoaderFunction } from "remix";

import { Badge, ListGroup, Stack } from "react-bootstrap";
import { Image } from "remix-image";

/*
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
      <div>
        <h1> Recipe Title</h1>
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
                {/*Cooking Tool*/}
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
                {/*Cooking Tool*/}
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
                {/*Cooking Tool*/}
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
      <Image />
      <Stack gap={2} direction="horizontal" className="col-md-5 mx-auto">
        <h3>Ingredients</h3>
      </Stack>
    </Stack>
  );
}

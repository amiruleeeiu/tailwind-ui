"use client";

import Accordion from "@/components/Accordion/Accordion";
import AccordionItem from "@/components/Accordion/AccordionItem";
import AccordionItemContent from "@/components/Accordion/AccordionItemContent";
import AccordionItemTrigger from "@/components/Accordion/AccordionItemTrigger";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import Card from "@/components/card";
import Checkbox from "@/components/Checkbox";
import Dropdown from "@/components/dropdown";
import IconButton from "@/components/icon-button";
import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "@/components/Modal/Modal";
import Pagination from "@/components/pagination";
import Popover from "@/components/Popover";
import Progressbar from "@/components/Progressbar";
import RadioGroup from "@/components/Radio/RadioGroup";
import Spinner from "@/components/Spinner";
import TableComponent from "@/components/Table/TableComponent";
import Tabs from "@/components/tabs";
import Toast from "@/components/Toast";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const accordionItems = [
  {
    value: "1",
    title: "Accordion Item 1",
    content: (
      <div className="bg-gray-100 p-3">
        <Card>
          <Card.Header>
            <Card.Title>Your Title</Card.Title>
          </Card.Header>
          <Card.Body>Your content here</Card.Body>
          <Card.Footer>Footer content</Card.Footer>
        </Card>
      </div>
    ),
  },
  {
    value: "2",
    title: "Accordion Item 2",
    content: "Accordion Item 2 Content",
    disabled: true,
  },
  {
    value: "3",
    title: "Accordion Item 3",
    content: "Accordion Item 3 Content",
  },
];

export default function Home() {
  const [selectedValue, setSelectedValue] = useState("10");

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState("10");

  const dropdownItems = [
    { label: "10", value: "10" },
    { label: "20", value: "20" },
    { label: "50", value: "50" },
    { label: "100", value: "100" },
  ];

  const onPageChange = (page: number) => {
    setPage(page);
  };

  return (
    <div className="p-12 bg-gray-100">
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <Card.Header>
            <Card.Title>Your Title</Card.Title>
          </Card.Header>
          <Card.Body>Your content here</Card.Body>
          <Card.Footer>Footer content</Card.Footer>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Your Title</Card.Title>
          </Card.Header>
          <Card.Body>Your content here</Card.Body>
          <Card.Footer>Footer content</Card.Footer>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Popover</Card.Title>
          </Card.Header>
          <Card.Body>
            <Popover />
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Modal</Card.Title>
          </Card.Header>
          <Card.Body>
            <Modal size="md" outsideClick={true}>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalBody>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi atque placeat iste mollitia a excepturi labore in
                aperiam magnam. Nobis quas illum architecto quam at totam rerum,
                aliquid molestias, debitis magnam eveniet voluptas, quis sit
                itaque dolorum et nemo earum esse velit ratione officia
                consectetur? Distinctio voluptatem sit mollitia exercitationem
                vel blanditiis soluta reprehenderit natus numquam provident?
                Quas hic consequatur explicabo quisquam maiores minima eius
                dolorem dolore eum? Nesciunt aut dignissimos illo culpa,
                consectetur possimus adipisci a aperiam fugiat cupiditate
                maiores iusto excepturi dolore earum nihil ad harum? Ducimus
                voluptate beatae architecto dolores quasi explicabo sed voluptas
                eligendi distinctio nam. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Nobis saepe laudantium pariatur praesentium
                iure explicabo consequuntur exercitationem, dolorem eligendi
                provident veritatis ea quisquam nemo quasi vero accusantium
                totam quas blanditiis, aliquam ab libero! Magni, similique rem
                voluptatibus quia iusto ad amet, quaerat sed dolore esse
                voluptas quidem officia ducimus id excepturi cupiditate,
                quisquam enim? Molestiae velit ad atque. Quam ipsum dolor id
                voluptas rerum inventore, sint nemo quod ipsa dignissimos nulla
                velit eveniet voluptatem voluptatum, eum possimus eius nam quo
                sapiente quibusdam. Culpa, veritatis atque sunt, officiis
                obcaecati dolore eaque molestias suscipit facilis, dignissimos
                non et repellendus nostrum consequuntur harum.
              </ModalBody>
              <ModalFooter>
                {({ onClose }) => (
                  <>
                    <Button onClick={onClose} color="default">
                      Cancel
                    </Button>
                    <Button onClick={() => console.log("clicked")}>
                      Submit
                    </Button>
                  </>
                )}
              </ModalFooter>
            </Modal>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Progress bar</Card.Title>
          </Card.Header>
          <Card.Body>
            <Progressbar />
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Toast</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="flex flex-wrap space-x-2">
              <Toast />
              <Toast type="error" />
              <Toast type="warning" />
              <Checkbox label="Phone" name="phone" />
              <Checkbox label="Email" name="email" />

              <div>
                <RadioGroup
                  options={[
                    { label: "Yes", value: "yes" },
                    { label: "No", value: "no" },
                  ]}
                />
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-4">
        <Card>
          <Card.Header>
            <Card.Title>Table</Card.Title>
          </Card.Header>
          <Card.Body className="">
            <TableComponent />
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Accordion</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="grid grid-cols-1 gap-2">
              <Accordion defaultValue={["1"]}>
                {accordionItems.map((item) => (
                  <AccordionItem key={item?.value} value={item.value}>
                    <AccordionItemTrigger>{item.title}</AccordionItemTrigger>
                    <AccordionItemContent>{item.content}</AccordionItemContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="grid grid-cols-1 gap-2">
              <h1 className="my-5">Collapsable</h1>
              <Accordion defaultValue={[]} collapsable>
                {accordionItems.map((item) => (
                  <AccordionItem key={item?.value} value={item.value}>
                    <AccordionItemTrigger
                      disabled={item.disabled}
                      rightIcon={<MdOutlineArrowForwardIos />}
                    >
                      {item.title}
                    </AccordionItemTrigger>
                    <AccordionItemContent>{item.content}</AccordionItemContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Spinner</Card.Title>
          </Card.Header>
          <Card.Body>
            <Spinner />
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Dropdown</Card.Title>
          </Card.Header>
          <Card.Body>
            <Dropdown
              items={dropdownItems}
              value={selectedValue}
              onChange={setSelectedValue}
              placeholder="Select items per page"
            />
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Button</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="grid grid-cols-4 gap-4">
              <Card>
                <Card.Header>
                  <Card.Title>Default</Card.Title>
                </Card.Header>
                <Card.Body>
                  <div className="flex flex-wrap space-2 gap-3">
                    <Button color="default">Default</Button>
                    <Button>Primary</Button>
                    <Button color="error">Error</Button>
                    <Button color="success">Success</Button>
                    <Button color="warning">Warning</Button>
                  </div>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header>
                  <Card.Title>Disabled</Card.Title>
                </Card.Header>
                <Card.Body>
                  <div className="flex flex-wrap space-x-2">
                    <Button disabled>Disabled</Button>
                  </div>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header>
                  <Card.Title>Loading</Card.Title>
                </Card.Header>
                <Card.Body>
                  <div className="flex flex-wrap space-x-2">
                    <Button isLoading loadingText="Submitting...">
                      Submit
                    </Button>
                    <Button isLoading={false}>Submit</Button>
                  </div>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header>
                  <Card.Title>Custom Tailwind Class</Card.Title>
                </Card.Header>
                <Card.Body>
                  <div className="flex flex-wrap space-x-2">
                    <Button className="border-2 border-blue-300 bg-white hover:bg-blue-500 hover:text-white hover:border-none-2 hover:border-transparent text-gray-700">
                      Submit
                    </Button>
                    <Button className="bg-violet-600 hover:bg-violet-700">
                      Submit
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Icon Button</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="flex flex-wrap space-x-2">
              <IconButton className="rounded-md">
                <MdOutlineArrowForwardIos />
              </IconButton>
              <IconButton>
                <FaPlus />
              </IconButton>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Badge</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="flex flex-wrap space-x-2">
              <Badge>Active</Badge>
              <Badge color="success">Active</Badge>
              <Badge color="error">Inactive</Badge>
              <Badge color="warning">Inactive</Badge>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Pagination</Card.Title>
          </Card.Header>
          <Card.Body>
            <Pagination
              limit={limit}
              setLimit={setLimit}
              count={100}
              totalPages={Math.ceil(100 / Number(limit))}
              currentPage={page}
              onPageChange={onPageChange}
            />
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Tabs</Card.Title>
          </Card.Header>
          <Card.Body>
            <Tabs />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

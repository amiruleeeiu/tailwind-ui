import { useBoolean } from "@/hooks/useBoolean";
import Button from "./Button";
import Modal, { ModalBody, ModalFooter, ModalHeader } from "./Modal/Modal";

function ModalComponent({
  children,
  outsideClick = false,
  size = "md",
}: {
  children: React.ReactNode;
  outsideClick?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}) {
  const { value, setTrue, setFalse } = useBoolean();
  return (
    <div>
      <Button onClick={setTrue}>{children}</Button>
      <Modal
        size={size}
        outsideClick={outsideClick}
        onClose={setFalse}
        isOpen={value}
      >
        {size !== "xs" && <ModalHeader>Modal Title</ModalHeader>}
        <ModalBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          atque placeat iste mollitia a excepturi labore in aperiam magnam.
          Nobis quas illum architecto quam at totam rerum, aliquid molestias,
          debitis magnam eveniet voluptas, quis sit itaque dolorum et nemo earum
          esse velit ratione officia consectetur? Distinctio voluptatem sit
          mollitia exercitationem vel blanditiis soluta reprehenderit natus
          numquam provident? Quas hic consequatur explicabo quisquam maiores
          minima eius dolorem dolore eum? Nesciunt aut dignissimos illo culpa,
          consectetur possimus adipisci a aperiam fugiat cupiditate maiores
          iusto excepturi dolore earum nihil ad harum? Ducimus voluptate beatae
          architecto dolores quasi explicabo sed voluptas eligendi distinctio
          nam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
          saepe laudantium pariatur praesentium iure explicabo consequuntur
          exercitationem, dolorem eligendi provident veritatis ea quisquam nemo
          quasi vero accusantium totam quas blanditiis, aliquam ab libero!
          Magni, similique rem voluptatibus quia iusto ad amet, quaerat sed
          dolore esse voluptas quidem officia ducimus id excepturi cupiditate,
          quisquam enim? Molestiae velit ad atque. Quam ipsum dolor id voluptas
          rerum inventore, sint nemo quod ipsa dignissimos nulla velit eveniet
          voluptatem voluptatum, eum possimus eius nam quo sapiente quibusdam.
          Culpa, veritatis atque sunt, officiis obcaecati dolore eaque molestias
          suscipit facilis, dignissimos non et repellendus nostrum consequuntur
          harum.
        </ModalBody>
        {size !== "xs" && (
          <ModalFooter>
            {({ onClose }) => (
              <>
                <Button onClick={onClose} color="default">
                  Cancel
                </Button>
                <Button onClick={() => console.log("clicked")}>Submit</Button>
              </>
            )}
          </ModalFooter>
        )}
      </Modal>
    </div>
  );
}

export default ModalComponent;

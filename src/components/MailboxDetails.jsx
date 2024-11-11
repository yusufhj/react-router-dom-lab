import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
    const { mailboxId } = useParams();
    const selectedBox = props.mailboxes.find(
      (mailbox) => mailbox._id === Number(mailboxId)
    );
    console.log(selectedBox);
    return (
      selectedBox ? (
        <main className="mail-box">
            <h1>Mailbox {selectedBox._id}</h1>
            <h3>Details</h3>
            <p>Boxholder: {selectedBox.boxholder}</p>
            <p>Box Size: {selectedBox.boxSize}</p>
        </main>
      ) : (
        <h1>Mailbox Not Found</h1>
      )
    )
}

export default MailboxDetails;
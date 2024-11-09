import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialForm = {

}
const MailboxForm = () => {
    return (
        <>
            <h2>Add a Mailbox</h2>
            <form>
                <label htmlFor="boxholder">Enter a Boxholder:</label>
                <input type="text" id="boxholder" placeholder='Boxholder name' />
                <label htmlFor="boxSize">Select a Box Size:</label>
                <select id="boxSize">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default MailboxForm;
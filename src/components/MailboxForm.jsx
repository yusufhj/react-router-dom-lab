import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialState = {
    boxholder: '',
    boxSize: 'small',
}

const MailboxForm = ({ addBox }) => {
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();

    const handleChange = ({target}) => {
        setFormData({...formData, [target.name]: target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        addBox(formData);
        setFormData(initialState);
        navigate('/mailboxes');
    };

    return (
        <>
            <h2>Add a Mailbox</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="boxholder">Enter a Boxholder:</label>
                <input 
                    type="text" 
                    id="boxholder"
                    name='boxholder'
                    value={formData.boxholder}
                    onChange={handleChange}
                    placeholder='Boxholder name' />
                
                <label htmlFor="boxSize">Select a Box Size:</label>
                <select 
                    id="boxSize"
                    name='boxSize'
                    value={formData.boxSize}
                    onChange={handleChange}
                >

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
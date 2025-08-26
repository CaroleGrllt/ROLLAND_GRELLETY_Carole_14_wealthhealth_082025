import { Modal } from '@carole-rg/hr-modal-react';
import '@carole-rg/hr-modal-react/styles.css';

export default function Modale({open, onClose, message, closeBtn}) {
    
    return (
        <Modal
            isOpen={open}
            onClose={onClose}
            message={message}
            closeBtn={closeBtn}
        />
    )
}

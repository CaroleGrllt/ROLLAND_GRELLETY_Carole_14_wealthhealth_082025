import { createPortal } from "react-dom";

export default function Modal({isOpen, onClose, message, closeBtn}) {

  if (!isOpen) return null;

  //createPortal pour sortir composant du noeud où form. Evite bug pour rendu avec parent. Modale doit être au dessus de tous les autres compo. 
  return createPortal(
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()} // empêche la fermeture si on clique dans la modale
      >

        <div className="modal-body">{message}</div>

        <div className="modal-footer">
          <button type="button" className="btn" onClick={onClose}>
            {closeBtn}
          </button>
        </div>
      </div>
    </div>,
    // on monte la modale au plus haut => élément body du DOM
    document.body
  );
}

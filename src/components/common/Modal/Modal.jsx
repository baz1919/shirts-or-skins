import * as React from "react";
import Link from "next/link";

const Modal = (title, description, onClick) => (
  <dialog open>
    <article>
      <header>
        <Link
          href="#close"
          aria-label="Close"
          class="close"
          onClick={onClick}
        />
        {title}
      </header>
      <p>{description}</p>
    </article>
  </dialog>
);

export default Modal;

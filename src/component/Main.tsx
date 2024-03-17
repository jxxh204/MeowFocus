import { FormEventHandler, ReactNode } from "react";

type Props = {
  children: ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
};
function Main({ children, onSubmit }: Props) {
  return <form onSubmit={onSubmit}>{children}</form>;
}

export default Main;

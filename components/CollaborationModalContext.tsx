"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type CollaborationModalContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const CollaborationModalContext = createContext<CollaborationModalContextValue | null>(null);

export function CollaborationModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CollaborationModalContext.Provider
      value={{ isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }}
    >
      {children}
    </CollaborationModalContext.Provider>
  );
}

export function useCollaborationModal() {
  const ctx = useContext(CollaborationModalContext);
  if (!ctx) {
    throw new Error("useCollaborationModal must be used within CollaborationModalProvider");
  }
  return ctx;
}

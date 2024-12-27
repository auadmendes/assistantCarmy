interface BoxProps {
  children: React.ReactNode;
}

export function Box({ children }: BoxProps) {
  return (
    <div className="flex items-center justify-center h-full max-h-full w-full border-none px-5 rounded-lg">
      {children}
    </div>
  );
}

type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="max-w-[640px] mx-auto bg-white min-h-screen flex flex-col border-l border-r">
      {children}
    </div>
  );
}

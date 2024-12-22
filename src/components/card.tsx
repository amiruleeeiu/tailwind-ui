interface BaseProps {
  children: React.ReactNode;
  className?: string;
}

// Component types
interface CardComponent extends React.FC<BaseProps> {
  Header: React.FC<BaseProps>;
  Title: React.FC<BaseProps>;
  Body: React.FC<BaseProps>;
  Footer: React.FC<BaseProps>;
}

const Card: CardComponent = ({ children, className = "" }) => {
  return (
    <div className={`rounded-lg shadow-lg bg-white ${className}`}>
      {children}
    </div>
  );
};

function CardHeader({ children, className = "" }: BaseProps) {
  return (
    <div className={`p-4 border-b border-gray-200 ${className}`}>
      {children}
    </div>
  );
}
Card.Header = CardHeader;

const CardTitle = ({ children, className = "" }: BaseProps) => {
  return (
    <h3 className={`text-xl font-semibold text-gray-800 ${className}`}>
      {children}
    </h3>
  );
};

Card.Title=CardTitle

const CardBody = ({ children, className = "" }: BaseProps) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

Card.Body=CardBody

const CardFooter = ({ children, className = "" }: BaseProps) => {
  return (
    <div className={`p-4 border-t border-gray-200 ${className}`}>
      {children}
    </div>
  );
};

Card.Footer=CardFooter
// Usage Example Component
export default Card;

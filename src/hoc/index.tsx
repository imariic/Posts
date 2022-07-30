import React, { useEffect } from "react";

export function withDisplayName<P>(WrappedComponent: React.ComponentType<P>) {
  const EnhancedComponent = (props: P) => {
    const displayName = WrappedComponent.displayName;

    useEffect(() => {
      console.log(`Hello from: ${displayName}`);
    }, []);

    return <WrappedComponent {...props} />;
  };

  return EnhancedComponent;
}

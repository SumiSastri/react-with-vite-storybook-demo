import { HTMLAttributes, ReactNode } from 'react';


interface StackProps extends HTMLAttributes<HTMLBodyElement> {
  /**
   * How much spacing do you need between the elements
   */
  spacing?: number;
  /**
   * At a break point do the elements need to wrap into the next row
   */
  wrap?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * 
   * Child elements 
   */
  children?: ReactNode;
  /**
   * Choose between a horizontal row or a vertical column 
   */
   direction?: 'row' | 'column',
    /**
   * Choose the number of elements to display
   */
   numberOfChildren?: number,
     /**
   * Choose the text color
   */
     color?: string,
}

    export const Stack = ({ 
        children, spacing = 2, direction = "row", numberOfChildren, wrap=false, ...props }: StackProps) => {
          const defineChildren = [...Array(numberOfChildren).keys()].map(n => (
            // style when number of children are defined
                <div
                    style={{
                        width: "150px",
                        height: "2.5em",
                        backgroundColor: "red",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center", 
                        flexDirection: direction,
                        ...props,
                      }}
                    >
                      {n + 1}
                    </div>
            ))
            // default style
            const style = {
                display: "flex",
                gap: `${spacing * 0.25}rem`,
                flexWrap: wrap ? "wrap" : "nowrap",
                flexDirection: direction,
                width: "150px",
                height: "2.5em",
                color: 'white',
                ...props,
              }
                return <div style={style}>{defineChildren}{children}</div>
              }

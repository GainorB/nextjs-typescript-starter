/**
 * You can include shared interfaces/types in a separate file
 * and then use them in any component by importing them.
 */

export interface CommonProps {
  id: number;
  name: string;
}

export interface ActionReturnProps {
  type: string;
  payload: any;
}

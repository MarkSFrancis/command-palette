export interface InputBoxOptions {
  /**
   * Set to `true` to keep the input box open when focus moves to another part of the application
   */
  ignoreFocusOut?: boolean;
  /**
   * Controls if a password input is shown. Password input hides the typed text
   */
  password?: boolean;
  /**
   * An optional string to show as placeholder in the input box to guide the user what to type
   */
  placeholder?: string;
  /**
   * The text to display underneath the input box
   */
  prompt?: string;
  /**
   * An optional string that represents the title of the input box
   */
  title?: string;
  /**
   * The value to prefill in the input box
   */
  value?: string;
  /**
   * An optional function that will be called to validate input and to give a hint to the user
   */
  validateInput?: (
    value: string
  ) => string | undefined | null | Promise<string | undefined | null>;
}

export const showInputBox = (
  options?: InputBoxOptions
): Promise<string | undefined> => {
  return undefined;
};

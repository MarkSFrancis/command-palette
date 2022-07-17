import { isPromise } from "../types";

class QuickPick {
  showQuickPick(
    items: readonly string[] | Promise<readonly string[]>,
    options: QuickPickOptions & { canPickMany: true }
  ): Promise<string[] | undefined>;
  showQuickPick(
    items: readonly string[] | Promise<readonly string[]>,
    options?: QuickPickOptions
  ): Promise<string | undefined>;
  showQuickPick<T extends QuickPickItem>(
    items: readonly T[] | Promise<readonly T[]>,
    options: QuickPickOptions & { canPickMany: true }
  ): Promise<T[] | undefined>;
  showQuickPick<T extends QuickPickItem>(
    items: readonly T[] | Promise<readonly T[]>,
    options?: QuickPickOptions
  ): Promise<T | undefined>;

  async showQuickPick<T extends QuickPickItem>(
    items:
      | readonly string[]
      | Promise<readonly string[]>
      | readonly T[]
      | Promise<readonly T[]>
  ): Promise<string[] | string | T[] | T | undefined> {
    if (isPromise(items)) {
      // Show spinner
    }

    return Promise.resolve(items).then((r) => {
      if (r.length === 0) {
        return undefined;
      }

      if (typeof r[0] === "string") {
        // Show simple options on screen
      } else if (typeof r[0] === "object") {
        // Show complex options on screen
      }

      return r[0];
    });
  }
}

export const showQuickPick = new QuickPick().showQuickPick;

export enum QuickPickItemKind {
  Default = 0,
  Separator = -1,
}

export interface QuickPickOptions {
  /**
   * An optional function that is invoked whenever an item is selected
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onDidSelectItem?: (item: QuickPickItem | string) => any;
  /**
   * An optional flag to make the picker accept multiple selections, if `true` the result is an array of picks
   */
  canPickMany?: boolean;
  /**
   * Set to `true` to keep the picker open when focus moves to another part of the application
   */
  ignoreFocusOut?: boolean;
  /**
   * An optional flag to include the description when filtering the picks
   */
  matchOnDescription?: boolean;
  /**
   * An optional flag to include the detail when filtering the picks
   */
  matchOnDetail?: boolean;
  /**
   * An optional string to show as placeholder in the input box to guide the user what to pick on
   */
  placeholder?: string;
  /**
   * An optional string that represents the title of the quick pick
   */
  title?: string;
}

export interface QuickPickItem {
  /**
   * A human-readable string which is rendered prominent
   */
  label: string;
  /**
   * A human-readable string which is rendered less prominent in the same line
   *
   * Note: this property is ignored when {@link kind} is set to {@link QuickPickItemKind.Separator}
   */
  description?: string;
  /**
   * A human-readable string which is rendered less prominent in a separate line.
   *
   * Note: this property is ignored when {@link kind} is set to {@link QuickPickItemKind.Separator}
   */
  detail?: string;
  /**
   * How this item is rendered in the quick pick.
   * When not specified, the default is {@link QuickPickItemKind.Default}
   */
  kind?: QuickPickItemKind;
}

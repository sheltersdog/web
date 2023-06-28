export class ReduxState<T> {
  constructor(
      readonly loading: boolean,
      readonly data: T | null,
      readonly error: boolean | null
  ) { }

  public copyWith(modifyObject: { [P in keyof ReduxState<T>]?: ReduxState<T>[P] }): ReduxState<T> {
      return Object.assign(Object.create(ReduxState.prototype), { ...this, ...modifyObject });
  }

  public static initial(initialData: any = null) {
      return new ReduxState(false, initialData, null)
  }

  public static loading(prevState: any = null) {
    return new ReduxState(true, prevState, null)
  }

  public static success(payload: any) {
    return new ReduxState(false, payload, null)
  }

  public static error(error: boolean) {
    return new ReduxState(false, null, error)
  }
}

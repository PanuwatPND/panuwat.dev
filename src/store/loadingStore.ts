
type Listener = (loading: boolean) => void;

class LoadingStore {
  private loading = false;
  private listeners: Listener[] = [];

  get isLoading() {
    return this.loading;
  }

  setLoading(value: boolean) {
    this.loading = value;
    this.listeners.forEach((fn) => fn(value));
  }

  subscribe(listener: Listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }
}

const loadingStore = new LoadingStore();
export default loadingStore;
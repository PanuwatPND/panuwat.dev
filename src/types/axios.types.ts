export interface option {
    url: string;
    method: string;
    data?: Record<string, unknown>;
    headers?: Record<string, string>;
    params?: Record<string, unknown>;
  }
  
  export interface Query {
    page: number;
    size: number;
    search: string;
    sort_by?: string;
    order_by?: string;
    role_id?: number;
    date?: number;
    broadcast_id?: number;
    account_id?: number;
  
  }
  
  export interface Paginate {
    page: number;
    size: number;
    total: number;
  }
  
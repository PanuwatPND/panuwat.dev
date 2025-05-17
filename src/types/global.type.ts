export type Paginate = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }

  export type Query = {
    page: number;
    limit: number;
    search?: string;
    total: number;
  }
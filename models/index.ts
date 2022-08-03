// NOTE
export interface Note {
  id: string;
  title: string;
  description: string;
  board: Board;
}

// BOARD
export interface Board {
  id: string;
  notes: Note[] | undefined;
  Admin: Admin;
  Viwer: Viwer[] | undefined;
}

// USER
interface User {
  id: string;
  nome: string;
  email: string;
  password: string;
}
export interface Admin extends User {
  Board: Board[] | undefined;
}
export interface Viwer extends User {
  Board: Board[] | undefined;
}

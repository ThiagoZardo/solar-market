export default interface IListProducts<T> {
  listAll(): Promise<T[]>
  searchCategory(category: string): Promise<T[]>
}

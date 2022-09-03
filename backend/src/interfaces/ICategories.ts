export default interface IListProducts<T> {
  listAllCategories(): Promise<T[]>
}

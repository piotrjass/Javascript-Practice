class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }
  itemCount() {
    return this.collection.length;
  }
  pageCount() {
    return Math.ceil(this.collection.length / this.itemsPerPage);
  }
  pageItemCount(pageIndex) {
    // Zwraca liczbę elementów na bieżącej stronie. pageIndex jest zerowy.
    // Ta metoda powinna zwrócić -1 dla wartości pageIndex spoza zakresu.

    // Sprawdzenie, czy pageIndex jest w zakresie.
    if (pageIndex >= 0 && pageIndex < this.pageCount()) {
      // Obliczenie indeksu początkowego i końcowego dla bieżącej strony.
      let startIndex = pageIndex * this.itemsPerPage;
      let endIndex = startIndex + this.itemsPerPage;

      // Zwrócenie liczby elementów na bieżącej stronie.
      // Jeśli endIndex przekracza długość kolekcji, użyj slice do obcięcia nadmiarowych elementów.
      return this.collection.slice(startIndex, endIndex).length;
    } else {
      // Jeśli pageIndex jest spoza zakresu, zwróć -1.
      return -1;
    }
  }
  pageIndex(itemIndex) {
    // Zwraca indeks strony, na której znajduje się dany element. Indeks strony jest zerowy.
    // Ta metoda powinna zwrócić -1 dla wartości itemIndex spoza zakresu.

    // Sprawdzenie, czy itemIndex jest w zakresie.
    if (itemIndex >= 0 && itemIndex < this.itemCount()) {
      // Obliczenie indeksu strony na podstawie itemIndex.
      return Math.floor(itemIndex / this.itemsPerPage);
    } else {
      // Jeśli itemIndex jest spoza zakresu, zwróć -1.
      return -1;
    }
  }
}

var helper = new PaginationHelper(["a", "b", "c", "d", "e", "f"], 4);
helper.pageCount(); // should == 2
helper.itemCount(); // should == 6
helper.pageItemCount(0); // should == 4
helper.pageItemCount(1); // last page - should == 2
helper.pageItemCount(2); // should == -1 since the page is invalid
console.log(helper.itemCount());
console.log(helper.pageCount());
console.log(helper.pageItemCount(2));
console.log(helper.pageItemCount(2));

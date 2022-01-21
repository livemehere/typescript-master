{
  interface Either<L, R> {
    left: () => L;
    right: () => R;
  }

  class SimpleEither<L, R> implements Either<L, R> {
    constructor(private letfValue: L, private rightValue: R) {}

    left() {
      return this.letfValue;
    }
    right() {
      return this.rightValue;
    }
  }

  const either = new SimpleEither({ name: "kong" }, 25);
  console.log(either.left());
  console.log(either.right());
}

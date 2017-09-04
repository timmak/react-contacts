import store from "./store";
import contactsInitialState from "./reducers/contacts/InitialState";

it("has the correct initialState", () => {
  const initialState = store.getState();
  expect(initialState).toEqual({
    contacts: contactsInitialState,
    router: {
      location: null
    }
  });
});

import {
  call,
  put,
  take,
  fork,
  cancelled,
  cancel,
  all,
} from "redux-saga/effects";

const fakeLogin = (username, password) => {
  return new Promise((res, rej) => {
    setTimeout(
      () => res(username === "sulfi@gmail.com" && password === "welcome@123"),
      3000
    );
  });
};

export function* authorize(username, password) {
  try {
    yield put({ type: "WAIT_FOR_LOGIN_RESPONSE" });
    const isLoggedIn = yield call(fakeLogin, username, password);

    if (isLoggedIn) {
      yield put({ type: "LOGIN_SUCCEEDED" });
    } else {
      throw "Username or password wrong";
    }
  } catch (error) {
    yield put({ type: "LOGIN_ERROR", payload: { error } });
  } finally {
    if (yield cancelled()) {
      yield put({ type: "LOGIN_CANCELLED" });
    }
  }
}

export function* loginFlow() {
  while (true) {
    const {
      payload: { username, password },
    } = yield take("LOGIN_REQUESTED");
    const task = yield fork(authorize, username, password);
    const action = yield take(["LOGOUT_REQUESTED", "LOGIN_ERROR"]);
    if (action.type === "LOGOUT_REQUESTED") {
      yield cancel(task);
    } else if (action.type === "LOGIN_ERROR") {
    }

    yield put({ type: "LOGOUT_SUCCEEDED" });
  }
}

export function* helloSaga() {
  console.log("Hello Sagas!");
}

export default function* rootSaga() {
  yield all([helloSaga(), loginFlow()]);
}

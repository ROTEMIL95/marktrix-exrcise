export const Name_LOADING = "Name_LOADING";
export const Name_FAIL = "Name_FAIL";
export const Name_SUCCESS = "Name_SUCCESS";

export type NameType = {
  Gender: string,
  Country: string,
  Name: string,

}
export interface NameLoading {
  type: typeof Name_LOADING
}

export interface NameFail {
  type: typeof Name_FAIL
}

export interface NameSuccess {
  type: typeof Name_SUCCESS,
  payload: NameType
}


export type NameDispatchTypes = NameLoading | NameFail | NameSuccess
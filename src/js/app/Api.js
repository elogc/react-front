import Mocks from "../mocks/Mocks";

/**
 *  Api service to communicate with backend services
 */
class Api {
  /**
   *  Api constructor
   */
  constructor() {
    /* global process */
    // const apiHost = 'http://www.mocky.io/v2/59e9bb9c100000d700135dee';
    const apiHost = "http://localhost:3111/v1";
    this.apiHost = apiHost;
  }

  /**
   *  Check the status of the fetch response
   *  @param   {object}  response  The response
   *  @throws  {Error}             If the server response is not "positive",
   *                               throws an error with server message
   *                               explanation
   *  @return  {object}            The success response
   */
  checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }

  /**
   *  Make a request using fetch
   *  @param   {string}   path     Path to be fetched
   *  @param   {object}   options  Fetch configuration
   *  @param   {string}   token    Add this auth token to the headers
   *  @return  {Promise}           The fetch promise
   */
  makeRequest(path, options, token = null) {
    const url = [this.apiHost, path].join("/");
    let opts = {
      ...options,
      headers: {
        ...options.headers,
        "Content-Type": "application/json"
      }
    };

    if (token) {
      opts = {
        ...opts,
        headers: {
          ...opts.headers,
          "Content-Type": "application/json",
          "x-jwt-token": token
        }
      };
    }

    return fetch(url, opts)
      .then(this.checkStatus)
      .then(response => response.json());
  }

  /**
   * Make a GET request
   * @param   {string}  path   The path to be requested
   * @param   {string}  token  Add this auth token to headers
   * @return  {object}         The response of the request
   */
  *get(path, token = null) {
    const options = {
      method: "GET"
    };

    if (Mocks.isMocked) {
      return Mocks.mockedCall(path);
    }
    const response = yield this.makeRequest(path, options, token);
    return response;
  }

  /**
   * Make a POST request
   * @param   {string}  path   The path to be requested
   * @param   {object}  data   The data to be added to request
   * @param   {string}  token  Add this auth token to headers
   * @return  {object}         The response of the request
   */
  *post(path, data, token = null) {
    const options = {
      method: "POST",
      body: JSON.stringify(data)
    };
    if (Mocks.isMocked) {
      return Mocks.mockedCall(path);
    }
    const response = yield this.makeRequest(path, options, token);
    return response;
  }
}

export default new Api();

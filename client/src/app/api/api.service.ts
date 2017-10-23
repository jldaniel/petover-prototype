import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {User} from './User';
import {Pet} from './Pet';
import {Service} from './Service';
import { ServiceRequest } from './ServiceRequest';
import {IStayover} from './IStayover';


@Injectable()
export class ApiService {
  /**
   * The base url for the PetOver REST API
   * @type {string}
   */
  private baseUrl = '/api';

  /**
   * The URL for login requests
   * @type {string}
   */
  private loginUrl = '/api/login';

  /**
   * The base URL for the users API
   * @type {string}
   */
  private usersUrl = this.baseUrl + '/users';

  /**
   * The URL for services API
   * @type {string}
   */
  private serviceUrl = this.baseUrl + '/services';

  /**
   * Base URL for the service requests API
   * @type {string}
   */
  private serviceRequestUrl = this.baseUrl + '/servicerequests';

  constructor(private http: Http) {
    console.log('ApiService.constructor called');
  }

  /**
   * Method used to login a user via the REST API
   *
   * @param {string} email The user's email that was used during account creation
   * @param {string} password The user's password
   * @returns {Promise<User>} A promise containing the user model
   */
  login(email: string, password: string): Promise<User> {
    console.log('ApiService.login called');
    const headers = this.createHeaders();
    const authString = btoa(email + '|' + password);
    headers.append('Authentication', authString);

    return this.http.get(this.loginUrl, {headers: headers}).toPromise()
      .then(response => response.json() as User)
      .catch(error => this.handleError(error));
  }

  /**
   * Get all users. In the future this method will need to be modified to include search
   * parameters
   *
   * @returns {Promise<User[]>} A list of users
   */
  getUsers(): Promise<User[]> {
    console.log('ApiService.getUsers called');
    const headers = this.createHeaders();

    return this.http.get(this.usersUrl, {headers: headers}).toPromise()
      .then(response => response.json() as User[])
      .catch(error => this.handleError(error));
  }

  /**
   * Get a specified user
   *
   * @param {number} id The ID of the user
   * @returns {Promise<User>} The requested user
   */
  getUser(id: number): Promise<User> {
    console.log('ApiService.getUser called');
    const headers = this.createHeaders();

    return this.http.get(this.usersUrl + '/' + id.toString(), {headers: headers})
      .toPromise()
      .then(response => response.json() as User)
      .catch(error => this.handleError(error));
  }

  /**
   * Create a new user
   *
   * @param {string} email The user's email
   * @param {string} password The user's password
   * @returns {Promise<User>} The new user resource
   */
  newUser(email: string, password: string): Promise<User> {
    console.log('ApiService.newUser called');
    const headers = this.createHeaders();

    const authString = btoa(email + '|' + password);
    console.log('newUser authString: ' + authString);
    headers.append('Authentication', authString);

    return this.http.post(this.usersUrl, {} , {headers: headers})
      .toPromise()
      .then(response => response.json() as User)
      .catch( error => this.handleError(error));
  }

  /**
   * Update a users profile with the supplied information
   *
   * @param {number} userId The ID of the user to update
   * @param {string} first_name The first name of the user to update
   * @param {string} last_name The last name of the user to update
   * @param {string} about_me The about me section of the user to update
   * @returns {Promise<any | never | User>}
   */
  updateUser(userId: number, first_name: string, last_name: string, about_me: string, picture: string): Promise<User> {
    console.log('ApiService.updateUser called');

    const url = this.usersUrl + '/' + userId;

    const body = { 'user': {
      'first_name': first_name,
      'last_name': last_name,
      'about_me': about_me,
      'picture': picture
    }};

    const headers = this.createHeaders();

    return this.http.put(url, body, {headers: headers})
      .toPromise()
      .then(response => response.json() as User)
      .catch(error => this.handleError(error));
  }

  /**
   * Add a new pet to the specified user
   *
   * @param {number} userId The ID of the user to add the pet to
   * @param {string} name The name of the pet
   * @param {string} about_me Information about the pet
   * @param {string} animal The type of animal that the pet is
   * @param {string} the base 64 encoded picture as a string
   * @returns {Promise<any | never | Pet>}
   */
  newPet(userId: number, name: string, about_me: string, animal: string, picture: string): Promise<Pet> {
    console.log('ApiService.newPet called');
    // TODO Authentication handling
    const url = this.usersUrl + '/' + userId + '/pets';

    // TODO: The construction of the Pet model should be handled someplace else
    const body = { 'pet': {
      'name': name,
      'about_me': about_me,
      'animal': animal,
      'picture': picture
    }};


    console.log('newPet request body');
    console.log(body);

    const headers = this.createHeaders();

    return this.http.post(url, body, {headers: headers})
      .toPromise()
      .then(response => response.json() as Pet)
      .catch(error => this.handleError(error));
  }

  /**
   * Get the specified pet
   * @param {number} userId
   * @param {number} petId
   * @returns {Promise<any | never | Pet>}
   */
  getPet(userId: number, petId: number) {
    console.log('ApiService.getPet called');
    const url = this.usersUrl + '/' + userId + '/pets/' + petId;
    const headers = this.createHeaders();

    return this.http.get(url, {headers: headers})
      .toPromise()
      .then(response => response.json() as Pet)
      .catch(error => this.handleError(error));


  }

  /**
   * Update a pet resource
   *
   * @param {number} userId
   * @param {number} petId
   * @param {string} name
   * @param {string} about_me
   * @param {string} animal
   * @returns {Promise<any>}
   */
  updatePet(userId: number, petId: number, name: string, about_me: string, animal: string, picture: string): Promise<any> {
    console.log('ApiService.updatePet called');

    const body = { 'pet': {
      'name': name,
      'about_me': about_me,
      'animal': animal,
      'picture': picture
    }};

    const headers = this.createHeaders();
    const url = this.usersUrl + '/' + userId + '/pets/' + petId;

    return this.http.put(url, body, {headers: headers})
      .toPromise()
      .then(response => response.json() as Pet)
      .catch(error => this.handleError(error));

  }

  /**
   * Add a new service to the specified user
   *
   * @param {number} userId The ID of the user to add the service to
   * @param {string} name The name of the service
   * @param {string} about Information about the service
   * @param {number} rate The rate of the service in USD
   * @param {number} rate_type The rate type, either hourly, once, or daily
   * @returns {Promise<any | never | Service>}
   */
  newService(userId: number, name: string, about: string, rate: number, rate_type: string, picture: string) {
    console.log('ApiService.newService called');
    // TODO: Authentication handling
    const url = this.usersUrl + '/' + userId + '/services';

    // TODO: The construction of the Service model should be handled someplace else
    const body = { 'service': {
      'name': name,
      'about': about,
      'rate': rate,
      'rate_type': rate_type,
      'picture': picture
    }};

    const headers = this.createHeaders();

    return this.http.post(url, body, {headers: headers})
      .toPromise()
      .then(response => response.json() as Service)
      .catch(error => this.handleError(error));
  }

  /**
   * Get the specified service
   * @param {number} userId
   * @param {number} serviceId
   * @returns {Promise<any | never | Service>}
   */
  getUserService(userId: number, serviceId: number) {
    console.log('ApiService.getUserService called');
    const url = this.usersUrl + '/' + userId + '/services/' + serviceId;
    const headers = this.createHeaders();

    return this.http.get(url, {headers: headers})
      .toPromise()
      .then(response => response.json() as Service)
      .catch(error => this.handleError(error));
  }

  /**
   * Get the specified service
   * @param {number} serviceId The ID of the service to retrieve
   * @returns {Promise<Service>}
   */
  getService(serviceId: number): Promise<Service> {
    console.log('ApiService.getService called');

    const url = this.baseUrl + '/services/' + serviceId;
    const headers = this.createHeaders();

    return this.http.get(url, {headers: headers})
      .toPromise()
      .then(response => response.json() as Service)
      .catch(error => this.handleError(error));
  }

  /**
   * Get the services that are within 10 miles of the parameter
   * @param {string} address
   * @returns {Promise<any | T>}
   */

  getRadServices(address: string) {
    const homeUrl = this.serviceUrl + '?addy=' + '\%27' + address + '\%27' ;
    console.log('AppComponent.getRadServices called');
    const headers = this.createHeaders();
    return this.http.get(homeUrl, {headers: headers}).toPromise()
      .then(response => response.json() as Service[])
      .catch(error => this.handleError(error));
  }



  /**
   * Update the specified service
   * @param {number} userId
   * @param {number} serviceId
   * @param {string} name
   * @param {string} about
   * @param {number} rate
   * @param {string} rate_type
   * @returns {Promise<Service>}
   */
  updateService(userId: number, serviceId: number, name: string,
                about: string, rate: number, rate_type: string, picture: string): Promise<Service> {
    console.log('ApiService.updateService called');

    const body = { 'service': {
      'name': name,
      'about': about,
      'rate': rate,
      'rate_type': rate_type,
      'picture': picture
    }};

    const url = this.usersUrl + '/' + userId + '/services/' + serviceId;
    const headers = this.createHeaders();

    return this.http.put(url, body, {headers: headers})
      .toPromise()
      .then(response => response.json() as Service)
      .catch(error => this.handleError(error));
  }


  /**
   * Typically used to get all Request
   * @param {number} userId - optional argument to specify a user ID to get all service requests related to that user
   * @returns {Promise<ServiceRequest[]>}
   */
  getServiceRequests(providerId: number, requesterId: number): Promise<ServiceRequest[]> {
    // TODO This current expects either providerId or requesterId to be provided but not both
    let url = this.serviceRequestUrl;
    const params: URLSearchParams = new URLSearchParams();
    if (providerId != null) {
      url += '?providerId=' + providerId;
      console.log('providerId set as search param for getServiceRequests');
    }

    if (requesterId != null) {
      url += '?requesterId=' + requesterId;
      console.log('requesterId set as search param for getServiceRequests');
    }


    const headers = this.createHeaders();

    return this.http.get(url, {headers: headers})
      .toPromise()
      .then(response => response.json() as ServiceRequest[])
      .catch(error => this.handleError(error));

  }

  /**
   * Get the stayovers for the specified user
   *
   * @param {number} userId The ID of the user to get the stayovers for
   * @returns {Promise<IStayover[]>}
   */
  getStayovers(userId: number): Promise<IStayover[]> {

    const url = this.baseUrl + '/stayovers?userId=' + userId;

    const headers = this.createHeaders();

    return this.http.get(url, {headers: headers})
      .toPromise()
      .then(response => response.json() as IStayover[])
      .catch(error => this.handleError(error));

  }


  /**
   * Retrieve the specified request
   * @param {number} requestId The ID of the request to retrieve
   * @returns {Promise<ServiceRequest>}
   */
  getServiceRequest(requestId: number): Promise<ServiceRequest> {

    const url = this.serviceRequestUrl + '/' + requestId;

    const headers = this.createHeaders();

    return this.http.get(url, {headers: headers})
      .toPromise()
      .then(response => response.json() as ServiceRequest)
      .catch(error => this.handleError(error));
  }

  /**
   * Create a new service request
   * @param {number} requesterId The ID of the user making the request
   * @param {number} providerId The ID of the user providing the service for the request
   * @param {number} serviceId The ID of the service
   * @param {Date} startDate The date to start the requested service
   * @param {Date} endDate The date to end the requested service
   * @param {string} message A message to accompany the service request
   * @param {number} petId The ID of the pet that the service will be provided for
   * @returns {Promise<ServiceRequest>} The newly created service request
   */
  createServiceRequest(requesterId: number, providerId: number, serviceId: number, startDate: Date,
                       endDate: Date, message: string, petId: number): Promise<ServiceRequest> {
    const url = this.serviceRequestUrl;

    const headers = this.createHeaders();

    const body = { 'service_request': {
      requester_id: requesterId,
      provider_id: providerId,
      service_id: serviceId,
      start_date: startDate,
      end_date: endDate,
      message: message,
      request_state: 'REQUESTED',
      pet_id: petId
    }};

    return this.http.post(url, body, {headers: headers})
      .toPromise()
      .then(response => response.json() as ServiceRequest)
      .catch(error => this.handleError(error));
  }

  /**
   * Update a service request, specifically the state
   * @param {number} serviceRequestId The ID of the service request to update
   * @param {string} requestState The new state to update the service request with
   * @returns {Promise<ServiceRequest>}
   */
  updateServiceRequest(serviceRequestId: number, requestState: string): Promise<ServiceRequest> {

    const url = this.serviceRequestUrl + '/' + serviceRequestId;

    const headers = this.createHeaders();

    const body = { 'service_request': {
      request_state: requestState
    }};

    return this.http.put(url, body, {headers: headers})
      .toPromise()
      .then(response => response.json() as ServiceRequest)
      .catch(error => this.handleError(error));
  }

  /**
   * Delete the specified service request
   * @param {number} serviceRequestId The ID of the service request to delete
   * @returns {Promise<any>}
   */
  deleteServiceRequest(serviceRequestId: number): Promise<any> {
    const url = this.serviceRequestUrl + '/' + serviceRequestId;

    const headers = this.createHeaders();

    return this.http.delete(url, {headers: headers})
      .toPromise()
      .then(response => response.json())
      .catch(error => this.handleError(error));
  }



  /**
   * Put together the headers for the REST request
   *
   * @returns {Headers}
   */
  private createHeaders(): Headers {
    const headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});
    return headers;
  }

  /**
   * Handle a request error
   *
   * @param error The error from the request
   * @returns {Promise<any>} The rejected promise
   */
  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

}

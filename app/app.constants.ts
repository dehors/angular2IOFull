import { Injectable } from '@angular/core';

@Injectable()
export class Config {
    public Server: string = "localhost:8080/apivenatucasa/public/";
    public ApiUrl: string = "v1/";
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}
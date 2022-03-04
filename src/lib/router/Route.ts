import { ComponentType } from "react";
import { RouteComponentProps } from "react-router";

export interface IParams {
    [prop: string]: string
}

export interface IRoute<TParams extends IParams|void = void> {
    readonly path: string
    readonly title: string|((props: RouteComponentProps<any>)=> string),
    readonly Component: ComponentType<any>
    readonly returnURL: TParams extends void 
        ? ()=> string
        : { [K in keyof TParams]-?: {} extends Pick<TParams, K> ? never : K }[keyof TParams] extends never 
            ? ( params?: TParams )=> string
            : ( params: TParams )=> string
        
}

class Route<TParams extends IParams|void = void > implements IRoute<TParams> {
    
    /**
     * @param path must equal or start with " / " 
     * @param title title of page
     * @param Component react fanctional or class Component
     * @example
     * new Route<IParams>("path", "title", Component) 
     */

    public returnURL: IRoute<TParams>['returnURL']
    
    constructor(
        public path: string,
        public title: string|((props: RouteComponentProps<any>)=> string),
        public Component: ComponentType<any>
    ) {
        this.returnURL = function( params? : TParams ) {
            if( !params ) return path.replace(/:(.)+?\?/g,'')
            let pathName = path;
            for( const param in params) {
                pathName = pathName.replace(
                    RegExp(`:${param}[?]?`) , String(params[param])
                )
            }
            pathName = pathName.replace(/:(.)+?\?/g,'')
            return pathName
        } as IRoute<TParams>['returnURL']
    }
    
}

export default Route;
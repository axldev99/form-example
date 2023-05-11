import { createFeatureSelector } from '@ngrx/store';
import { AppState } from '../../core/core.state';
import { User, Review, FormExample } from './form-example.model';


export const FORM_EXAMPLE_FEATURE_NAME = 'formExample';

export const selectFormExample = createFeatureSelector<
    AppState,
    FormExampleState
>(FORM_EXAMPLE_FEATURE_NAME);

export interface FormExampleState {
    formExample: FormExample;
    page: number;
    isAuthenticated: boolean;
}

export interface State extends AppState {
    [FORM_EXAMPLE_FEATURE_NAME] : FormExampleState;
}
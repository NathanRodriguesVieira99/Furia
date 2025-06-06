// setup da React Testing Library
import '@testing-library/jest-dom';

// limpa todos os mocks a cada teste
afterEach(() => {
    jest.clearAllMocks();
});

// setup do MSW
import { server } from '@/_tests/mocks/server';
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

/* 
mock feito com ajuda de IA para conseguir testar apis que não tem no navegador, pois algumas libs usam
*/
class IntersectionObserverMock {
    root: Element | null = null;
    rootMargin: string = '';
    thresholds: ReadonlyArray<number> = [];

    constructor() {}
    observe = jest.fn();
    unobserve = jest.fn();
    disconnect = jest.fn();
    takeRecords = jest.fn(() => []);
}

global.IntersectionObserver = IntersectionObserverMock;

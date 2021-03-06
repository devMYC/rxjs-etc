/**
 * @license Copyright © 2017 Nicholas Jamieson. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/cartant/rxjs-etc
 */
/*tslint:disable:no-unused-expression*/

import { Observable } from "rxjs/Observable";
import { marbles } from "rxjs-marbles";

import "./mergeArray";

describe("observable/mergeArray", () => {

    it("should merge a single observable", marbles((m) => {

        const source =   m.cold("a--|");
        const subs =            "^--!";
        const expected = m.cold("a--|");

        const destination = Observable.mergeArray([source]);
        m.expect(destination).toBeObservable(expected);
        m.expect(source).toHaveSubscriptions(subs);
    }));

    it("should merge multiple observables", marbles((m) => {

        const source1 =  m.cold("a--|");
        const subs1 =           "^--!";
        const source2 =  m.cold("--b--|");
        const subs2 =           "^----!";
        const expected = m.cold("a-b--|");

        const destination = Observable.mergeArray([source1, source2]);
        m.expect(destination).toBeObservable(expected);
        m.expect(source1).toHaveSubscriptions(subs1);
        m.expect(source2).toHaveSubscriptions(subs2);
    }));

    it("should complete when observables is empty", marbles((m) => {

        const expected = m.cold("|");

        const destination = Observable.mergeArray([]);
        m.expect(destination).toBeObservable(expected);
    }));
});

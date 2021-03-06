/**
 * @license Copyright © 2017 Nicholas Jamieson. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/cartant/rxjs-etc
 */
/*tslint:disable:no-unused-expression*/

import { marbles } from "rxjs-marbles";
import { endWith } from "./endWith";

import "rxjs/add/operator/let";

describe("let/endWith", () => {

    it("should end an observable with a single value", marbles((m) => {

        const source =   m.cold("-a-b-c-|");
        const subs =            "^------!";
        const expected = m.cold("-a-b-c-(d|)");

        const destination = source.let(endWith("d"));
        m.expect(destination).toBeObservable(expected);
        m.expect(source).toHaveSubscriptions(subs);
    }));

    it("should end an observable with multiple values", marbles((m) => {

        const source =   m.cold("-a-b-c-|");
        const subs =            "^------!";
        const expected = m.cold("-a-b-c-(de|)");

        const destination = source.let(endWith("d", "e"));
        m.expect(destination).toBeObservable(expected);
        m.expect(source).toHaveSubscriptions(subs);
    }));
});

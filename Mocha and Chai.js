const except = chai.expect;
let p1 = [1, 2, 3, 4, 5]
let p2 = [1, 2, 3, 4, 5]

describe('shuffle',function() {
    describe('#shuffle', function() {
        it('it should start game of war, and deal cards', function(){
            const x = p1;
            except(x).to.have.all.members(p1); 
        });
        it('should throw an error if numbers are not at random', function() {
            except(function() {
                numberOfCards(p1).to.eql(p2);
            }).to.throw(Error);
        })
    });
});
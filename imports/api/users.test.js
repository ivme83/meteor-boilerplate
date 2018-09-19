import { Meteor }           from 'meteor/meteor';
import expect               from 'expect';
import { validateNewUser }  from './users';

if (Meteor.isServer){
    describe('user', function(){
        it('should allow valid email address', function(){
            const testUser = {
                emails: [
                    {
                        address: 'bob@bob.com'
                    }
                ]
            }
    
            const res = validateNewUser(testUser);
    
            expect(res).toBe(true);
        });

        it('should reject invalid email', function(){
            const testUser = {
                emails: [
                    {
                        address: 'bob.com'
                    }
                ]
            }

            expect(() => {
                validateNewUser(testUser);
            }).toThrow();
        });
    });
}
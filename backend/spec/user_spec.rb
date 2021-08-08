require 'spec_helper'
describe 'User' do 
    #@user = User.create!(name:"Will West", email:"wwest@gmail.com", password_digest:"password")
    it 'validates email' do 
        u = User.new(name:"Will West", email:"wwest@gmail.com", password_digest:"password")
        expect(u.valid?).to be_falsey
    end

    it 'validates names presence' do 
        u = User.new(name:"", email:"test@gmail.com", password_digest:"asdf")
        expect(u.valid?).to be_falsey
    end

    it 'validates password presence' do 
        u = User.new(name:"west", email:"test@gmail.com", password_digest:"")
        expect(u.valid?).to be_falsey
    end
end
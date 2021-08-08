require 'spec_helper'

describe 'product' do 
  it 'validates names presence' do 
    u = Product.new(name:"", color:"blue", category:"Cup", stock: 200)
    expect(u.valid?).to be_falsey
  end

  it 'validates category presence' do 
    u = Product.new(name:"Tumbler", color:"blue", category:"", stock: 200)
      expect(u.valid?).to be_falsey
  end

  it 'validates color presence' do 
    u = Product.new(name:"Tumbler", color:"", category:"Cup", stock: 200)
      expect(u.valid?).to be_falsey
  end

  it 'validates stock presence' do 
    u = Product.new(name:"Tumbler", color:"blue", category:"Cup", stock:nil)
    expect(u.valid?).to be_falsey
  end
end

def calculate(str)
  return str.scan(/\d+|minus\d+|plus\d+/).map {|s| s.gsub(/minus/, '-').gsub(/plus/, '')}.map(&:to_i).sum.to_s;
end
//https://www.codewars.com/kata/5809b62808ad92e31b000031

# https://www.hackerrank.com/challenges/ruby-until/problem?isFullScreen=true
coder.practice until coder.oh_one?

# https://www.hackerrank.com/challenges/ruby-case/problem?isFullScreen=true&h_r=next-challenge&h_v=zen
def identify_class(obj)
  case obj.class.to_s
      when 'Hacker'
      puts "It's a Hacker!"
      when 'Submission'
      puts "It's a Submission!"
      when 'TestCase'
      puts "It's a TestCase!"
      when 'Contest'
      puts "It's a Contest!"
  else
      puts "It's an unknown model"
  end
end
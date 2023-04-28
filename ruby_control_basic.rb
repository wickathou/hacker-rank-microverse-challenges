# https://www.hackerrank.com/challenges/ruby-tutorial-each/problem?isFullScreen=true
def scoring(array)
  array.each {|user| user.update_score}
end

# https://www.hackerrank.com/challenges/ruby-tutorial-unless/problem?isFullScreen=true&h_r=next-challenge&h_v=zen
def scoring(array)
  array.each {|user| user.update_score unless user.is_admin?}
end

# https://www.hackerrank.com/challenges/ruby-infinite-loop/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
loop do
  coder.practice
  break if coder.oh_one?
end